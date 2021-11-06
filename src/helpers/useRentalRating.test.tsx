import { renderHook } from "@testing-library/react-hooks";
import { useRentalRating } from "./useRentalRating";

describe("UseRentalRating", () => {
  it("0", () => {
    const { result } = renderHook(() => useRentalRating(0));

    expect(result.current.arrayStarsFilled).toStrictEqual([]);
    expect(result.current.arrayStarsRemaining).toStrictEqual([1, 2, 3, 4, 5]);
  });

  it("3.9", () => {
    const { result } = renderHook(() => useRentalRating(3.9));

    expect(result.current.arrayStarsFilled).toStrictEqual([1, 2, 3, 4]);
    expect(result.current.arrayStarsRemaining).toStrictEqual([1]);
  });

  it("4.8", () => {
    const { result } = renderHook(() => useRentalRating(4.8));

    expect(result.current.arrayStarsFilled).toStrictEqual([1, 2, 3, 4, 5]);
    expect(result.current.arrayStarsRemaining).toStrictEqual([]);
  });

  it("5.0", () => {
    const { result } = renderHook(() => useRentalRating(5.0));

    expect(result.current.arrayStarsFilled).toStrictEqual([1, 2, 3, 4, 5]);
    expect(result.current.arrayStarsRemaining).toStrictEqual([]);
  });
});
