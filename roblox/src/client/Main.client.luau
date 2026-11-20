--!strict

local ReplicatedStorage = game:GetService("ReplicatedStorage")

local Config = require(ReplicatedStorage.Shared.Config)

print(("[Thermal Tech] client ready (config v%s)"):format(Config.Version))
