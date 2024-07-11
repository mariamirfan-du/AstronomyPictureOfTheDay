import requests

# Replace with your actual API key
# api_key = "YOUR_API_KEY"

# API endpoint URL
# url = f"https://api.nasa.gov/insight_weather/?api_key={api_key}&feedtype=json&ver=1.0"
url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"

# Send API request
response = requests.get(url)

# Check for successful response
if response.status_code == 200:
    # Parse JSON data
    data = response.json()
    
    with open(f"{data['title']}.png", 'wb') as file:
    	file.write(requests.get(data['url']).content)
    	
    print ("Done")

else:
    print(f"Error: API request failed with status code {response.status_code}")
