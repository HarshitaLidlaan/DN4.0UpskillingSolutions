import java.util.Scanner;

public class LCM {
    public static int gcd(int a, int b) {
        if (b == 0) return a;
        return gcd(b, a % b);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first number: ");
        int a = scanner.nextInt();
        System.out.print("Enter second number: ");
        int b = scanner.nextInt();

        int lcm = (a * b) / gcd(a, b);
        System.out.println("LCM: " + lcm);
        scanner.close();
    }
}

