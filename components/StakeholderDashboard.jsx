import React from 'react';

const StakeholderDashboard = () => {
  // Sample data for demonstration purposes
  const data = {
    sponsors: [
      { name: 'Sponsor A', contributions: 50000, revenue: 100000, impact: 'Clean Water Initiative' },
      { name: 'Sponsor B', contributions: 30000, revenue: 60000, impact: 'Education Program' },
    ],
    donors: [
      { name: 'Donor A', contributions: 15000, revenue: 30000, impact: 'Tree Plantation' },
      { name: 'Donor B', contributions: 25000, revenue: 50000, impact: 'Healthcare' },
    ],
    shareholders: [
      { name: 'Shareholder A', contributions: 70000, revenue: 150000, impact: 'Renewable Energy' },
      { name: 'Shareholder B', contributions: 40000, revenue: 80000, impact: 'Tech Innovation' },
    ],
  };

  return (
    <div>
      <h1>Stakeholder Dashboard</h1>
      <h2>Sponsors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contributions</th>
            <th>Revenue Generated</th>
            <th>Impact Metrics</th>
          </tr>
        </thead>
        <tbody>
          {data.sponsors.map((sponsor, index) => (
            <tr key={index}>
              <td>{sponsor.name}</td>
              <td>{sponsor.contributions}</td>
              <td>{sponsor.revenue}</td>
              <td>{sponsor.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Donors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contributions</th>
            <th>Revenue Generated</th>
            <th>Impact Metrics</th>
          </tr>
        </thead>
        <tbody>
          {data.donors.map((donor, index) => (
            <tr key={index}>
              <td>{donor.name}</td>
              <td>{donor.contributions}</td>
              <td>{donor.revenue}</td>
              <td>{donor.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Shareholders</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contributions</th>
            <th>Revenue Generated</th>
            <th>Impact Metrics</th>
          </tr>
        </thead>
        <tbody>
          {data.shareholders.map((shareholder, index) => (
            <tr key={index}>
              <td>{shareholder.name}</td>
              <td>{shareholder.contributions}</td>
              <td>{shareholder.revenue}</td>
              <td>{shareholder.impact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StakeholderDashboard;