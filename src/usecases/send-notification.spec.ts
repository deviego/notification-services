import { sendNotification } from './send-notification';

describe('send notification', () => {
  it('should be able to send a notification', async () => {
    const testeSendNotification = new sendNotification();
    const { notification } = await testeSendNotification.execute({
      recipientId: 'this is a notification',
      content: 'hello norification ',
      category: 'social ',
    });
    expect(notification).toBeTruthy();
  });
});
