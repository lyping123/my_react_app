import { useState } from "react";

export default function Form() {
    const [name, setFish] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [fishData, setFishData] = useState([name, price, image]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setFishData([name, price, image]);
        const jsonData = JSON.stringify({ name, price, image });
        try {
            const response = await fetch('http://localhost:8080/api/post.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newItems: jsonData }) // Convert to valid JSON string
            });

            if (response.ok) alert('JSON file updated successfully!');
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }

    return (
        <div className="form-container">
            <div className="row">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setFish(e.target.value)} name="name" placeholder="Fish name.." />
                </div>
                <div className="form-group">
                    <label htmlFor="price">price</label>
                    <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} name="price" placeholder="Fish name.." />
                </div>
                <div className="form-group">
                    <label htmlFor="image">image</label>
                    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} name="image" placeholder="Fish name.." />
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );

}