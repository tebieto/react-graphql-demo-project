import colors from './colors';

describe('colors', () => {
  it('should be an onbject', () => {
    expect(colors).toBeInstanceOf(Object);
  });
  it('should have primaryColor value of #000000', () => {
    expect(colors.primaryColor).toBe('#000000');
  });
  it('should have secondaryColor value of #ffffff', () => {
    expect(colors.secondaryColor).toBe('#ffffff');
  });
  it('should have primaryButtonColor value of #5c5c5c', () => {
    expect(colors.primaryButtonColor).toBe('#5c5c5c');
  });
  it('should have primaryButtonTextColor value of #ffffff', () => {
    expect(colors.primaryButtonTextColor).toBe('#ffffff');
  });
  it('should have resultPageBackgroundColor value of #fafbfc', () => {
    expect(colors.resultPageBackgroundColor).toBe('#fafbfc');
  });
});
