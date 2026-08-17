## 2024-05-15 - Array Lookups in Render Loops
**Learning:** Checking for inclusion using `Array.includes()` inside a render loop over `totalDays` (like mapping 60 days) results in an O(N²) operation.
**Action:** Convert arrays (`completedDays`, `missedDays`) to `Set`s using `useMemo` before mapping over a loop to optimize lookups from O(N) to O(1).
