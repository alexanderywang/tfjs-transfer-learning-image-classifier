export function getUserInfo() {
  const userInfo = window.sessionStorage.getItem("userInfo");
  return userInfo ? JSON.parse(userInfo) : {};
}

const sessionStorageMock = (() => {
  let cache = {};

  return {
    getItem(key) {
      return cache[key] || null;
    },
    setItem(key, value) {
      cache[key] = value.toString();
    },
    removeItem(key) {
      delete cache[key];
    },
    clear() {
      cache = {};
    }
  };
})();

Object.defineProperty(window, "sessionStorage", {
  value: sessionStorageMock
});

describe("getUserInfo", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    jest.restoreAllMocks();
  });
  it("should get user info from session storage", () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    window.sessionStorage.setItem(
      "userInfo",
      JSON.stringify({ userId: 1, userEmail: "example@gmail.com" })
    );
    const actualValue = getUserInfo();
    expect(actualValue).toEqual({ userId: 1, userEmail: "example@gmail.com" });
    expect(getItemSpy).toBeCalledWith("userInfo");
  });

  it("should get empty object if no user info in session storage", () => {
    const getItemSpy = jest.spyOn(window.sessionStorage, "getItem");
    const actualValue = getUserInfo();
    expect(actualValue).toEqual({});
    expect(window.sessionStorage.getItem).toBeCalledWith("userInfo");
    expect(getItemSpy).toBeCalledWith("userInfo");
  });
});
