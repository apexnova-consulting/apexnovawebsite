import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Lead interface for type safety
export interface Lead {
  id?: string;
  email: string;
  name?: string;
  company?: string;
  industry: string;
  risk_score: number;
  risk_level: string;
  answers: any;
  created_at?: string;
  roadmap_sent?: boolean;
}

// Function to insert lead
export async function insertLead(leadData: Lead) {
  if (!supabase) {
    console.error('Supabase client not initialized');
    return { success: false, error: 'Database not configured' };
  }

  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([{
        email: leadData.email,
        name: leadData.name,
        company: leadData.company,
        industry: leadData.industry,
        risk_score: leadData.risk_score,
        risk_level: leadData.risk_level,
        answers: leadData.answers,
        roadmap_sent: false,
        created_at: new Date().toISOString()
      }])
      .select();

    if (error) {
      console.error('Supabase insert error:', error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Lead insertion error:', error);
    return { success: false, error: 'Failed to save lead' };
  }
}

// Function to update roadmap sent status
export async function markRoadmapSent(email: string) {
  if (!supabase) return { success: false };

  try {
    const { error } = await supabase
      .from('leads')
      .update({ roadmap_sent: true })
      .eq('email', email);

    if (error) {
      console.error('Update error:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Roadmap status update error:', error);
    return { success: false };
  }
}

