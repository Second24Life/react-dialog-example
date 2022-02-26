import reducer from "../reducer"

const initialState = { messages: [{ id: 1 }, { id: 2 }] }

describe("Тестируем reducer", () => {
  it("Тестирование экшена remove-message", () => {
    expect(
      reducer(initialState, {
        type: "remove-message",
        payload: 2
      })
    ).toEqual({ messages: [{ id: 1 }] })
  })

  it("Тестирование экшена add-message", () => {
    expect(
      reducer(initialState, {
        type: "add-message",
        payload: { id: 3 }
      })
    ).toEqual({ messages: [{ id: 1 }, { id: 2 }, { id: 3 }] })
  })

  it("Тестирование экшена update-status", () => {
    expect(
      reducer(initialState, {
        type: "update-status",
        payload: { status: "readed", id: 1 }
      })
    ).toEqual({ messages: [{ id: 1, status: "readed" }, { id: 2 }] })
  })

  it("Тестируем возникновение ошибки", () => {
    expect(() => reducer(initialState, { type: "some-action" })).toThrow()
  })
})