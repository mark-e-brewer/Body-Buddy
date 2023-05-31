import InfoChart from '../components/InfoChart';

export default function InfoPage() {
  return (
    <>
      <h2 className="text-center" style={{ marginTop: '8px', marginBottom: '16px' }}>Recomendations for Volumes</h2>
      <div className="d-flex flex-column text-center">
        <h5>MV = Maintenance Volume</h5>
        <h5>MEV = Minimum Effective Volume</h5>
        <h5>MAV = Maximum Adaptive Volume</h5>
        <h5>MRV = Maximum Recoverable Volume</h5>
        <h5>Frequency = Number of Session per Week</h5>
        <div style={{ marginTop: '16px' }} className="d-flex justify-content-center">
          <InfoChart />
        </div>
      </div>
    </>
  );
}
