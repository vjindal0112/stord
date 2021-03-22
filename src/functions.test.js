import React from 'react'
import { encodeBase62, decodeBase62, getSerial, getIndex } from './functions';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('encodes correctly', () => {
  expect(encodeBase62(3)).toBe("d");
  expect(encodeBase62(745)).toBe("mb");
  expect(encodeBase62(62)).toBe("ba");
  expect(encodeBase62(61)).toBe("9");
  expect(encodeBase62(38)).toBe("M");
});

it('decodes correctly', () => {
  expect(decodeBase62("d")).toBe(3);
  expect(decodeBase62("mb")).toBe(745);
  expect(decodeBase62("ba")).toBe(62);
  expect(decodeBase62("9")).toBe(61);
  expect(decodeBase62("M")).toBe(38);
})

it('getSerial works correctly', async () => {
  const mockUseState = jest.fn();
  await getSerial("https://notion.so", mockUseState).then((res) => {
    expect(res).toBe(1);
  })
  await getSerial("https://google.com", mockUseState).then((res) => {
    expect(res).toBe(2);
  })
})

it('getIndex works correctly', async () => {
  await getIndex("b").then((res) => {
    expect(res).toBe("https://notion.so");
  })
  await getIndex("c").then((res) => {
    expect(res).toBe("https://google.com");
  })
})

