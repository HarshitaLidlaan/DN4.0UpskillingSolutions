import java.util.Scanner;

public class RemoveWhitespaces {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();

        String result = input.replaceAll("\\s", "");

        System.out.println("String without whitespaces: " + result);
        scanner.close();
    }
}

