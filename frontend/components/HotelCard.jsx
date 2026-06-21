export default function HotelCard({
    hotel,
}) {
    return (
        <div className="border p-4 rounded">
            <h3 className="font-bold">
                {hotel.name}
            </h3>

            <p>{hotel.type}</p>

            <p>⭐ {hotel.rating}</p>
        </div>
    );
}