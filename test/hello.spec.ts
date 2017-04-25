import { hello } from '../src/lib/hello';
import { expect } from 'chai';

describe('Hello Function', () => {
  it('should return hello world', () => {
    const result = hello('World');
    expect(result).to.equal('Hello World!');
  });
});
