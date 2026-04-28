'use client';
import Dropdown from './ui/Dropdown';
import SearchIcon from './icons/SearchIcon';
import FullRoundedButton from './ui/FullRoundedButton';
import SVGIcon from './ui/SVGIcon';
import { CATEGORIES, DISTRICTS } from '../data/options';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const district = formData.get('district')!.toString();
    const category = formData.get('category')!.toString();

    router.push(`/facilities?district=${district}&category=${category}`);
  }

  return (
    <div className="px-8 py-6 shadow-lg rounded-xl bg-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 sm:items-end"
      >
        <div className="sm:flex-3/6">
          <Dropdown
            id="category"
            label="照護服務"
            options={CATEGORIES}
            variant="accent"
          />
        </div>

        <div className="sm:flex-2/6">
          <Dropdown
            id="district"
            label="地區"
            options={DISTRICTS}
            variant="accent"
          />
        </div>

        <div className="sm:flex-1/6">
          <FullRoundedButton
            type="submit"
            className="w-full inline-flex justify-center items-center gap-2"
          >
            <SVGIcon icon={SearchIcon} />
            <span>立即搜尋</span>
          </FullRoundedButton>
        </div>
      </form>
    </div>
  );
}
