import { Content } from './contents';

describe('notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('vocë recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });
  it('should not be able to create notification content with less than 5 characters', () => {
    expect(() => new Content('voc')).toThrow();
  });
  it('should not be able to create notification content with less than 5 characters', () => {
    expect(() => new Content('voc'.repeat(242))).toThrow();
  });
});
