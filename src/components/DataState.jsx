import ProductSkeleton from './ProductSkeleton'
import { useStore } from '../context/StoreContext'
export default function DataState({ count = 4 }) {
  const { loading, error, reload } = useStore()
  if (loading) return <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" role="status" aria-label="Cargando productos">{Array.from({ length: count }, (_,i) => <ProductSkeleton key={i} />)}</div>
  if (error) return <div className="nexo-card p-8 text-center"><p className="font-semibold text-nexo-danger">{error}</p><button onClick={reload} className="btn-primary mt-5">Reintentar</button></div>
  return null
}
