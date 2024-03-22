import EN from '../Icons/lang/EN';
import ES from '../Icons/lang/ES';

export default function Flag({ code }: { code: string | undefined }) {
  return (
    <>
      {code === 'es' && <ES />}
      {code === 'en' && <EN />}
    </>
  );
}
