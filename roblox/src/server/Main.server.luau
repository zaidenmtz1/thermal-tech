--!strict

local Players = game:GetService("Players")

print("[Thermal Tech] server started")

Players.PlayerAdded:Connect(function(player)
	print(("[Thermal Tech] %s joined"):format(player.Name))
end)
