-- ApexNova Consulting - Leads Table Schema
-- Run this SQL in your Supabase SQL Editor

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  company VARCHAR(255),
  industry VARCHAR(100) NOT NULL,
  risk_score INTEGER NOT NULL CHECK (risk_score >= 0 AND risk_score <= 100),
  risk_level VARCHAR(50) NOT NULL,
  answers JSONB,
  roadmap_sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Create index on risk_level for filtering
CREATE INDEX IF NOT EXISTS idx_leads_risk_level ON leads(risk_level);

-- Create index on industry for segmentation
CREATE INDEX IF NOT EXISTS idx_leads_industry ON leads(industry);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at
BEFORE UPDATE ON leads
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for API)
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow service role to read all
CREATE POLICY "Allow service role to read all" ON leads
  FOR SELECT
  USING (auth.role() = 'service_role');

-- Optional: Create a view for lead analytics
CREATE OR REPLACE VIEW lead_analytics AS
SELECT 
  DATE(created_at) as date,
  industry,
  risk_level,
  COUNT(*) as lead_count,
  AVG(risk_score) as avg_risk_score,
  SUM(CASE WHEN roadmap_sent THEN 1 ELSE 0 END) as roadmaps_sent
FROM leads
GROUP BY DATE(created_at), industry, risk_level
ORDER BY date DESC;

COMMENT ON TABLE leads IS 'Stores leads captured from the AI Risk Calculator';
COMMENT ON COLUMN leads.email IS 'Work email address of the lead';
COMMENT ON COLUMN leads.risk_score IS 'Calculated risk score from 0-100';
COMMENT ON COLUMN leads.risk_level IS 'Risk classification: Critical, High, Moderate, or Low';
COMMENT ON COLUMN leads.answers IS 'JSON object containing all assessment answers';
COMMENT ON COLUMN leads.roadmap_sent IS 'Whether the remediation roadmap PDF has been sent via email';

