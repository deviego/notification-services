import { Content } from './contents';
import { Notification } from './notification';

describe('notification content', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New solicitation'),
      category: 'social',
      recipientId: 'recipient id',
    });

    expect(notification).toBeTruthy();
  });
});
