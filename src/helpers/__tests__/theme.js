import { setTheme, getTheme } from "../theme"

test("Функция setTheme должна работать правильно", () => {
  setTheme("dark")
  expect(localStorage.setItem.mock.calls[0]).toEqual(["application-theme", "dark"])
  expect(document.body.classList[0]).toEqual("dark")
})

test("Функция getTheme должна работать правильно", () => {
  getTheme("light")
  expect(localStorage.getItem.mock.calls[0][0]).toEqual("application-theme")
})