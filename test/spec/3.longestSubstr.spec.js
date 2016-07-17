/************************************************************

 * Problem: https://leetcode.com/problems/longest-substring-without-repeating-characters/
    Given a string, find the length of the longest substring without repeating characters.

 * Example:
    Given "abcabcbb", the answer is "abc", which the length is 3.
    Given "bbbbb", the answer is "b", with the length of 1.
    Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 * @param {string} s
 * @return {number}

 * Analysis: Substring-related problems are classic! In this no-repeated longest substring problem, we can have substr by using sth like 'slide window' with (left, right),
    and to check the repeatness of each char to be extended into current 'slide window'.

************************************************************/

import { longestSubstr } from "../../src/3.longestSubstr/solution";

describe('# Problem 3 - Given a string, find the length of the longest substring without repeating characters.', function() {

    describe('Solution 1: Slide Window, using substring and lastIndexOf to check if repeated', function() {
        it('return 0 if s has no char: ""', function() {
            var result = longestSubstr.slideWin("");

            expect(result).toEqual(0);
        });

        it('return 1 if s has 1 char: "a"', function() {
            var result = longestSubstr.slideWin("a");

            expect(result).toEqual(1);
        });

        it('return 2 if s has 2 different char: "ab"', function() {
            var result = longestSubstr.slideWin("ab");

            expect(result).toEqual(2);
        });

        it('return expected result for longest substring that not start from the head of string: "anviaj"', function() {
            var result = longestSubstr.slideWin("anviaj");

            expect(result).toEqual(5);
        });

        it('return expected result for longest substring that start from the head of string: "abcabcbb"', function() {
            var result = longestSubstr.slideWin("abcabcbb");

            expect(result).toEqual(3);
        });

    });

    describe('Solution 2: Slide Window enhanced, by using lastIndexOf alone', function() {
        it('return 0 if s has no char: ""', function() {
            var result = longestSubstr.slideWinEnhanced("");

            expect(result).toEqual(0);
        });

        it('return 1 if s has 1 char: "a"', function() {
            var result = longestSubstr.slideWinEnhanced("a");

            expect(result).toEqual(1);
        });

        it('return 2 if s has 2 different char: "ab"', function() {
            var result = longestSubstr.slideWinEnhanced("ab");

            expect(result).toEqual(2);
        });

        it('return expected result for longest substring that not start from the head of string: "anviaj"', function() {
            var result = longestSubstr.slideWinEnhanced("anviaj");

            expect(result).toEqual(5);
        });

        it('return expected result for longest substring that start from the head of string: "abcabcbb"', function() {
            var result = longestSubstr.slideWinEnhanced("abcabcbb");

            expect(result).toEqual(3);
        });

    });

    describe('Solution 3: slide window with hash', function() {
        it('return 0 if s has no char: ""', function() {
            var result = longestSubstr.hash("");

            expect(result).toEqual(0);
        });

        it('return 1 if s has 1 char: "a"', function() {
            var result = longestSubstr.hash("a");

            expect(result).toEqual(1);
        });

        it('return 2 if s has 2 different char: "ab"', function() {
            var result = longestSubstr.hash("ab");

            expect(result).toEqual(2);
        });

        it('return expected result for longest substring that not start from the head of string: "anviaj"', function() {
            var result = longestSubstr.hash("anviaj");

            expect(result).toEqual(5);
        });

        it('return expected result for longest substring that start from the head of string: "abcabcbb"', function() {
            var result = longestSubstr.hash("abcabcbb");

            expect(result).toEqual(3);
        });

    });

    describe('Solution 4: hash+reduce. loop string with array.reduce instead of for/while loop, more elegant.', function() {
        it('return 0 if s has no char: ""', function() {
            var result = longestSubstr.hashReduce("");

            expect(result).toEqual(0);
        });

        it('return 1 if s has 1 char: "a"', function() {
            var result = longestSubstr.hashReduce("a");

            expect(result).toEqual(1);
        });

        it('return 2 if s has 2 different char: "ab"', function() {
            var result = longestSubstr.hashReduce("ab");

            expect(result).toEqual(2);
        });

        it('return expected result for longest substring that not start from the head of string: "anviaj"', function() {
            var result = longestSubstr.hashReduce("anviaj");

            expect(result).toEqual(5);
        });

        it('return expected result for longest substring that start from the head of string: "abcabcbb"', function() {
            var result = longestSubstr.hashReduce("abcabcbb");

            expect(result).toEqual(3);
        });

    });

});
