// https://coderbyte.com/editor/First%20Factorial:Java
package com.company;

import java.util.Scanner;

public class Main {
    public static int FirstFactorial(int num) {
        if (num == 1) return num;
        return num * FirstFactorial(--num);
    }

    public static void main (String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print(FirstFactorial(Integer.valueOf(s.nextLine())));
    }
}
