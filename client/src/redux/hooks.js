import { useDispatch, useSelector } from 'react-redux'

export const useAppDispatch = (data) => useDispatch(data)
export const useAppSelector = (state) => useSelector(state)
