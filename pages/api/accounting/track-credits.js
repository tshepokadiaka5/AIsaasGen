'use strict';

import getGcpCredits from '../../lib/gcp';
import getFirebaseUsage from '../../lib/firebase';
import getAIToolSpending from '../../lib/ai';
import manageBudgets from '../../lib/budget';
import prepareTaxRecords from '../../lib/tax';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const gcpCredits = await getGcpCredits();
            const firebaseUsage = await getFirebaseUsage();
            const aiToolSpending = await getAIToolSpending();
            const budgets = manageBudgets();
            const taxRecords = prepareTaxRecords();

            res.status(200).json({
                gcpCredits,
                firebaseUsage,
                aiToolSpending,
                budgets,
                taxRecords,
            });
        } catch (error) {
            res.status(500).json({ message: 'Error fetching data' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
