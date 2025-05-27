// Task 8: Operator Precedence
public class OperatorPrecedence {
    public static void main(String[] args) {
        int result1 = 10 + 5 * 2;  // multiplication before addition
        int result2 = (10 + 5) * 2; // parentheses change precedence

        System.out.println("10 + 5 * 2 = " + result1);   // Output: 20
        System.out.println("(10 + 5) * 2 = " + result2); // Output: 30

        // More complex example
        int result3 = 20 / 5 + 3 * 2 - 1; 
        // Division and multiplication have same precedence, evaluated left to right
        // So: (20/5)=4, (3*2)=6
        // Then: 4 + 6 - 1 = 9
        System.out.println("20 / 5 + 3 * 2 - 1 = " + result3);
    }
}

