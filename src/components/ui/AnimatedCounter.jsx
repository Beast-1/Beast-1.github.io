import { useCountUp } from '../../hooks/useCountUp'

export function AnimatedCounter({ value }) {
  const { ref, display } = useCountUp(value)
  return <span ref={ref}>{display}</span>
}
