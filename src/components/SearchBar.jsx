export function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Şəhər adı yazın (məs: Baku, Ganja)..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
  );
}