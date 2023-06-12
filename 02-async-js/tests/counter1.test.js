const timer = require('../easy/counter1');

describe("Counter1", () => {
  let consoleLogSpy;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
    jest.useFakeTimers();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
    jest.useRealTimers();
  });

  test("counter is incrementing every second", () => {
    timer();

    jest.advanceTimersByTime(5000);

    expect(consoleLogSpy).toHaveBeenCalledTimes(5);
    expect(consoleLogSpy.mock.calls[0][0]).toBe(1);
    expect(consoleLogSpy.mock.calls[1][0]).toBe(2);
    expect(consoleLogSpy.mock.calls[2][0]).toBe(3);
    expect(consoleLogSpy.mock.calls[3][0]).toBe(4);
    expect(consoleLogSpy.mock.calls[4][0]).toBe(5);
  });
});
