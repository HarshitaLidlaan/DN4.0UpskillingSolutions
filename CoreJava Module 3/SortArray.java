import java.util.Arrays;
import java.util.Scanner;

public class SortArray {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter number of elements: ");
        int n = scanner.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter elements:");
        for (int i = 0; i < n; i++) arr[i] = scanner.nextInt();

        Arrays.sort(arr);

        System.out.println("Sorted array in ascending order:");
        for (int num : arr) System.out.print(num + " ");
        System.out.println();
        scanner.close();
    }
}

