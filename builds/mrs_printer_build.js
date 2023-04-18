module.exports = {
    board_env: "STM32G0B1RE_manta_btt",
    active: true,
    meta: {
        stable_name: "mrsprinter-e3ez-{{marlin_version}}-{{uid}}",
        nightly_name: "mrsprinter-e3ez-{{current_date}}-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        //path: "/config/examples/Creality/Ender-3/CrealityV422/",
        path: "/config/examples/Creality/Ender-3%20Pro/BigTreeTech%20SKR%20Mini%20E3%203.0/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            ["MOTHERBOARD", "BOARD_BTT_MANTA_E3_EZ_V1_0"],
            ["X_DRIVER_TYPE",  "TMC2209"],
            ["Y_DRIVER_TYPE",  "TMC2209"],
            ["Z_DRIVER_TYPE",  "TMC2209"],
            ["Z2_DRIVER_TYPE",  "TMC2209"],
            ["E0_DRIVER_TYPE",  "TMC2209"],
            //standard leveling menu helper
            "LCD_BED_TRAMMING",
            "BED_TRAMMING_INCLUDE_CENTER",
            ["STRING_CONFIG_H_AUTHOR", "(James Snell)"],
            ["CUSTOM_MACHINE_NAME", "Mrs. Printer"]
        ],
        disable: []
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ],
        disable: []
    }
};