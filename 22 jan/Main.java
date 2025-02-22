import java.util.*;
public class Main {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt(); // Number of rows/columns
        
        for (int i = 1; i <= n; i++) { // Loop through rows
            for (int j = 1; j <= n; j++) { // Loop through columns
                // Conditions for printing '*'
                if (i == 1 || i == n || j == 1 || j == n || i == j || i + j == n + 1) {
                    System.out.print("* ");
                } else {
                    System.out.print("  "); // Two spaces for proper alignment
                }
            }
            System.out.println(); // Move to the next line after each row
        }
    }
}
