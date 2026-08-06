import { useState } from 'react';
import { Card } from './Card';
import { Pagination } from './Pagination'
import { FaHourglassHalf } from "react-icons/fa";
import { BiError } from "react-icons/bi";
import { useFetch } from '../hooks/useFetch'

const PER_PAGE = 3
export function NewsList() {
  const [page, setPage] = useState(1)
  const { data: news, loading, error } = useFetch('https://6a74cd3715e0453fe1b54397.mockapi.io/news')
  if (loading) return <p className="news-status"><FaHourglassHalf /> Xəbərlər yüklənir...</p>
  if (error) return <p className="news-status"><BiError /> Xəbərləri yükləmək mümkün olmadı.</p>
  if (!news || news.length === 0) return <p className="news-status">Xəbər tapılmadı.</p>

  const totalPages = Math.ceil(news.length / PER_PAGE)
  const currentNews = news.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <div className="news-section">
      <div className="news-header">
        <h3 className="news-heading">Son Xəbərlər</h3>
      </div>
      <div className="news-container">
        {currentNews.map((item) => (<Card key={item.id} item={item} />))}
      </div>
      <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}