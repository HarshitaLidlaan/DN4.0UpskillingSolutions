import java.util.Scanner;

public class WordCount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String input = scanner.nextLine();

        String[] words = input.trim().split("\\s+");
        int count = (input.trim().isEmpty()) ? 0 : words.length;

        System.out.println("Number of words: " + count);
        scanner.close();
    }
}

