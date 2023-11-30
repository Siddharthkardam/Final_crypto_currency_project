import java.util.*;

public class Scoreboard {
    public static List<String> solution(String[] matches) {
        Map<String, Integer> teamPoints = new HashMap<>();

        for (String match : matches) {
            String[] parts = match.split(" ");
            String team1 = parts[0];
            String team2 = parts[2];
            int goals1 = Integer.parseInt(parts[1].split(":")[0]);
            int goals2 = Integer.parseInt(parts[1].split(":")[1]);

            if (goals1 > goals2) {
                teamPoints.put(team1, teamPoints.getOrDefault(team1, 0) + 3);
            } else if (goals1 < goals2) {
                teamPoints.put(team2, teamPoints.getOrDefault(team2, 0) + 3);
            } else {
                teamPoints.put(team1, teamPoints.getOrDefault(team1, 0) + 1);
                teamPoints.put(team2, teamPoints.getOrDefault(team2, 0) + 1);
            }
        }

        List<String> scoreboard = new ArrayList<>();

        teamPoints.entrySet().stream()
                .sorted((entry1, entry2) -> entry2.getValue().compareTo(entry1.getValue()))
                .forEach(entry -> scoreboard.add(entry.getKey() + " " + entry.getValue()));

        return scoreboard;
    }

    public static void main(String[] args) {
        String[] matches = {"Liverpool 3:2 PSG", "RedStar 0:0 Napoli", "PSG 6:1 RedStar", "Napoli 1:0 Liverpool"};
        List<String> scoreboard = solution(matches);

        for (String entry : scoreboard) {
            System.out.println(entry);
        }
    }
}
