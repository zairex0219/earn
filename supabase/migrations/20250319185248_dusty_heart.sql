/*
  # Add Binance ID column to enrollments table

  1. Changes
    - Add binance_id column to enrollments table as nullable first
    - Set default value for existing rows
    - Make the column NOT NULL after setting defaults

  2. Security
    - Maintain existing RLS policies
*/

-- Add column as nullable first
ALTER TABLE enrollments 
ADD COLUMN binance_id text;

-- Set a default value for existing rows
UPDATE enrollments 
SET binance_id = 'LEGACY_' || id::text 
WHERE binance_id IS NULL;

-- Make the column NOT NULL
ALTER TABLE enrollments 
ALTER COLUMN binance_id SET NOT NULL;