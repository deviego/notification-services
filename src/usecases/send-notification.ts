import { Content } from 'src/app/entities/contents';
import { Notification } from 'src/app/entities/notification';

interface sendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}
interface sendNotificatinoResponse {
  notification: Notification;
}
export class sendNotification {
  async execute(
    request: sendNotificationRequest,
  ): Promise<sendNotificatinoResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });
    return {
      notification,
    };
  }
}
