export default function DayPlan({
    day,
}) {
    return (
        <div className="border rounded p-4 mb-4">
            <h2 className="font-bold text-xl">
                Day {day.day}
            </h2>

            <ul>
                {day.activities.map(
                    (activity, index) => (
                        <li key={index}>
                            • {activity}
                        </li>
                    )
                )}
            </ul>
        </div>
    );
}