import { KnownPipe } from './known.pipe';

describe('KnownPipe', () => {
  it('create an instance', () => {
    const pipe = new KnownPipe();
    expect(pipe).toBeTruthy();
  });
});
