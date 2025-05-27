import java.util.Scanner;

public class RecursiveFactorial {
    public static long factorial(int n) {
        if (n <= 1) return 1;
        return n * factorial(n - 1);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a non-negative integer: ");
        int n = scanner.nextInt();

        System.out.println("Factorial of " + n + " is: " + factorial(n));
        scanner.close();
    }
}

