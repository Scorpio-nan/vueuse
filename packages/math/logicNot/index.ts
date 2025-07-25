import type { ComputedRef, MaybeRefOrGetter } from 'vue'
import { computed, toValue } from 'vue'

/**
 * `NOT` conditions for refs.
 *
 * @see https://vueuse.org/logicNot
 */
export function logicNot(v: MaybeRefOrGetter<any>): ComputedRef<boolean> {
  return computed(() => !toValue(v))
}

// alias
export { logicNot as not }
