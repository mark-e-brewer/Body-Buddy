import { useRouter } from 'next/router';
import GoalGenerator from '../../components/forms/GoalGenerator';

export default function GeneratorPage() {
  const router = useRouter();
  const { weekUid } = router.query;
  return (
    <>
      <div style={{ marginTop: '20px' }} className="d-flex flex-column justify-content-center">
        <h4 className="text-center">Select Experience Level</h4>
        <GoalGenerator weekId={weekUid} />
      </div>
    </>
  );
}
