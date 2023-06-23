import { useRouter } from 'next/router';
import GoalGenerator from '../../components/forms/GoalGenerator';

export default function GeneratorPage() {
  const router = useRouter();
  const { weekUid } = router.query;
  return (
    <>
      <div className="d-flex flex-column justify-content-center">
        <h3 className="text-center gen-page-title">Select Experience Level</h3>
        <GoalGenerator weekId={weekUid} />
      </div>
    </>
  );
}
