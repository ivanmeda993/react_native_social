import {useEffect, useState} from 'react';

const pagination = <T extends any>(
  data: T[],
  page: number,
  pageSize: number,
): T[] => {
  const start = (page - 1) * pageSize;
  const end = page * pageSize;

  if (start > data.length) {
    return [];
  }

  return data.slice(start, end);
};

export const usePagination = <T extends any>(
  data: T[],
  pageSize: number,
): {
  currentPage: number;
  renderedData: T[];
  isLoading: boolean;
  fetchMore: () => void;
} => {
  const [currentPage, setCurrentPage] = useState(1);
  const [renderedData, setRenderedData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const paginatedData = pagination(data, currentPage, pageSize);
    setRenderedData(paginatedData);
    setIsLoading(false);
  }, []);

  const fetchMore = () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const paginatedData = pagination(data, currentPage + 1, pageSize);
    if (paginatedData.length > 0) {
      setCurrentPage(currentPage + 1);
      setRenderedData(prev => [...prev, ...paginatedData]);
    }
    setIsLoading(false);
  };

  return {currentPage, renderedData, isLoading, fetchMore};
};
