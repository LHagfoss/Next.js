import { useState } from 'react';
import search from '@public/search.svg'

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleSearchUrl, '_blank');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center flex-col gap-5">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        className=" focus:shadow-lg hover:shadow-lg w-[500px] px-4 py-2 text-[14px] border rounded-full border-1 text-[#fff] focus:text-[#fff] border-[#303134] focus:outline-none bg-[#202124] hover:bg-[#303134] focus:bg-[#303134]"
        style={{
            backgroundImage: `url(${search.src})`,
            backgroundPosition: '15px 50%',
            backgroundRepeat: 'no-repeat',
            paddingLeft: 'px',
          }}
      />
        <div className="flex flex-row">
            <button
            onClick={handleSearch}
            className="shadow-lg ml-2 px-4 py-2 bg-[#303134] text-[12px] text-[#fff] hover:bg-[#46464b] rounded-md"
        >
            Google-Søk
        </button>
        <button
            onClick={handleSearch}
            className="shadow-lg ml-2 px-4 py-2 bg-[#303134] text-[12px] text-[#fff] hover:bg-[#46464b] rounded-md"
        >
            Jeg prøver lykken
        </button>
        </div>
    </div>
  );
};

export default SearchBar;
