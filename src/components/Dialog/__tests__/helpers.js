import { normalizeDialog } from "../helpers"
import dialog from "../../../data"

test("Тестируем функцию normalizeDialog", () => {
  expect(normalizeDialog(dialog.slice(1, 4))).toEqual([
    {
      type: 'title',
      id: 'item-title-1',
      date: '2020-10-11T10:19:04.712Z'
    },
    {
      type: 'message',
      id: 'item-message-0',
      avatar: 'https://sun9-2.userapi.com/c638729/v638729951/1d0ea/f9V7aJyh6tw.jpg',
      isReverse: false,
      isRemovable: false,
      messages: [
        {
          text: 'Привет',
          status: undefined,
          id: 0,
          date: "2020-10-11T10:09:04.712Z",
        }
      ]
    },
    {
      type: 'message',
      id: 'item-message-1',
      avatar: 'https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg',
      isReverse: true,
      isRemovable: true,
      messages: [
        {
          text: 'Привет! Как дела?',
          status: 'readed',
          id: 1,
          date: "2020-10-11T11:09:04.712Z",
        }
      ]
    }
  ])
})