export const versionData = {
  // BACK4 Versions
  "v4.2": {
    version: "4.2",
    device: "BACK4",
    releaseDate: "15/01/2024",
    securityClass: "B",
    updateType: "evolutionary",
    tags: ["New interface", "Care+", "Ergonomics"],
    changes: {
      features: [
        "New intuitive user interface",
        "Integration of basic protocols and Care+",
        "Improved general ergonomics",
      ],
      security: ["Enhanced parameter validation", "Improved intensity control"],
    },
    impacts: {
      security: "Enhanced therapeutic parameter security",
      performance: "More intuitive and faster interface",
    },
    instructions: [
      "Training recommended for new protocols",
      "Patient data backup advised",
    ],
    resolvedIssues: ["Response time optimization", "Display error corrections"],
    updateRisks: "Loss of custom parameters if not saved",
    residualRisks: "Adaptation time needed for new interface",
    installation: {
      steps: [
        "Backup patient data",
        "Install via USB",
        "Post-installation calibration",
      ],
      compatibility: {
        accessories: ["Standard cables", "X series electrodes"],
        previousVersions: ["3.39", "3.34", "3.33"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },
  "v3.39": {
    version: "3.39",
    device: "BACK4",
    releaseDate: "01/12/2023",
    securityClass: "B",
    updateType: "evolutionary",
    tags: ["Long cables", "Transmission", "Calibration"],
    changes: {
      features: [
        "Long cable support",
        "Signal transmission optimization",
        "Automatic calibration for long cables",
      ],
      security: [
        "Adapted impedance control",
        "Long-distance connection security",
      ],
    },
    impacts: {
      security: "Secure long-distance treatment",
      performance: "Treatment range extended up to 5m",
    },
    instructions: [
      "Use only certified long cables",
      "Check calibration before use",
    ],
    resolvedIssues: [
      "Signal loss compensation",
      "Long-distance intensity stabilization",
    ],
    updateRisks: "Incompatibility with non-certified cables",
    residualRisks: "Slight latency at extreme distances",
    installation: {
      steps: [
        "Firmware update",
        "Cable compatibility test",
        "System calibration",
      ],
      compatibility: {
        accessories: ["Certified long cables", "Standard electrodes"],
        previousVersions: ["3.34", "3.33"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },
  "v3.34": {
    version: "3.34",
    device: "BACK4",
    releaseDate: "15/10/2023",
    securityClass: "B",
    updateType: "evolutionary",
    tags: ["Care+", "New protocols"],
    changes: {
      features: [
        "Care+ current integration",
        "New therapeutic protocols",
        "Dedicated Care+ interface",
      ],
      security: ["New protocol security", "Care+ parameter validation"],
    },
    impacts: {
      security: "Enhanced Care+ parameter control",
      performance: "Extended therapeutic options",
    },
    instructions: ["Mandatory Care+ training", "Updated procedures"],
    resolvedIssues: ["Care+ current optimization", "New protocol stability"],
    updateRisks: "Requires specific training",
    residualRisks: "Increased parameter complexity",
    installation: {
      steps: ["Software update", "Care+ license activation", "User training"],
      compatibility: {
        accessories: ["Care+ electrodes", "Standard cables"],
        previousVersions: ["3.33"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },
  "v3.33": {
    version: "3.33",
    device: "BACK4",
    releaseDate: "01/09/2023",
    securityClass: "B",
    updateType: "corrective",
    tags: ["Stable version", "Optimization"],
    changes: {
      features: [
        "Stable market version",
        "General optimization",
        "Standard interface",
      ],
      security: ["Standard security update", "Enhanced system controls"],
    },
    impacts: {
      security: "Stable reference version",
      performance: "Standard optimal performance",
    },
    instructions: ["Recommended update", "No specific training required"],
    resolvedIssues: ["General stability", "Minor corrections"],
    updateRisks: "No major risks identified",
    residualRisks: "Nominal operation",
    installation: {
      steps: ["Standard update", "Post-installation verification"],
      compatibility: {
        accessories: ["All standard accessories"],
        previousVersions: ["3.32", "3.31"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },

  // BACK3TX Versions
  "v3.27": {
    version: "3.27",
    device: "BACK3TX",
    releaseDate: "01/06/2023",
    securityClass: "B",
    updateType: "evolutionary",
    changes: {
      features: [
        "Long cable support",
        "Automatic calibration for long cables",
        "Signal transmission optimization",
      ],
      security: [
        "Adapted impedance control",
        "Long-distance connection security",
      ],
    },
    impacts: {
      security: "Secure long-distance treatment",
      performance: "Extended treatment range",
    },
    instructions: [
      "Use only certified long cables",
      "Check calibration before use",
    ],
    resolvedIssues: [
      "Signal loss compensation",
      "Long-distance intensity stabilization",
    ],
    updateRisks: "Incompatibility with non-certified cables",
    residualRisks: "Slight latency at extreme distances",
    installation: {
      steps: [
        "Firmware update",
        "Cable compatibility test",
        "System calibration",
      ],
      compatibility: {
        accessories: ["Certified long cables", "Standard electrodes"],
        previousVersions: ["3.20", "3.17", "3.14"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },
  "v3.20": {
    version: "3.20",
    device: "BACK3TX",
    releaseDate: "01/04/2023",
    securityClass: "B",
    updateType: "corrective",
    changes: {
      features: [
        "System noise correction",
        "Sound signal optimization",
        "Improved audio quality",
      ],
      security: ["Noise interference filtering", "Audio system stabilization"],
    },
    impacts: {
      security: "Reduced sound interference",
      performance: "Improved treatment quality",
    },
    instructions: [
      "Recommended update",
      "Check sound level after installation",
    ],
    resolvedIssues: [
      "Noise interference elimination",
      "Enhanced sound stability",
    ],
    updateRisks: "Temporary disruption during update",
    residualRisks: "Possible minimal residual noise",
    installation: {
      steps: ["Backup settings", "Install patch", "Audio test"],
      compatibility: {
        accessories: ["All standard accessories"],
        previousVersions: ["3.17", "3.14"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },
  "v3.17": {
    version: "3.17",
    device: "BACK3TX",
    releaseDate: "15/02/2023",
    securityClass: "B",
    updateType: "corrective",
    changes: {
      features: [
        "Error 254 correction",
        "System stabilization",
        "Improved error handling",
      ],
      security: ["Enhanced exception handling", "Improved error detection"],
    },
    impacts: {
      security: "Improved system stability",
      performance: "Reduced treatment interruptions",
    },
    instructions: ["Mandatory update", "Restart required after installation"],
    resolvedIssues: ["System error 254", "Related instabilities"],
    updateRisks: "Temporary loss of custom settings",
    residualRisks: "Slightly longer startup time",
    installation: {
      steps: ["Backup data", "Install patch", "System restart"],
      compatibility: {
        accessories: ["All standard accessories"],
        previousVersions: ["3.14"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },
  "v3.14": {
    version: "3.14",
    device: "BACK3TX",
    releaseDate: "01/01/2023",
    securityClass: "B",
    updateType: "evolutionary",
    changes: {
      features: [
        "Stable market version",
        "Standard interface",
        "Optimized basic features",
      ],
      security: ["Standard security controls", "Parameter validation"],
    },
    impacts: {
      security: "Stable reference version",
      performance: "Standard optimal performance",
    },
    instructions: ["Reference version", "No specific action required"],
    resolvedIssues: ["Stable version", "No major issues known"],
    updateRisks: "No particular risks",
    residualRisks: "Nominal operation",
    installation: {
      steps: ["Standard installation", "Post-installation verification"],
      compatibility: {
        accessories: ["All standard accessories"],
        previousVersions: ["3.13", "3.12"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },

  // Hi-TENS Versions
  "v4.6": {
    version: "4.6",
    device: "Hi-TENS",
    releaseDate: "01/03/2024",
    securityClass: "B",
    updateType: "evolutionary",
    changes: {
      features: [
        "Specialized veterinary mode",
        "Animal-adapted protocols",
        "Veterinary-specific interface",
      ],
      security: ["Adapted safety parameters", "Veterinary-specific controls"],
    },
    impacts: {
      security: "Secure animal treatment",
      performance: "Optimized for veterinary use",
    },
    instructions: [
      "Veterinary training required",
      "Use reserved for professionals",
    ],
    resolvedIssues: ["Intensity adaptation", "Optimized veterinary programs"],
    updateRisks: "Exclusive veterinary use required",
    residualRisks: "Specific training needed",
    installation: {
      steps: [
        "Specialized update",
        "Veterinary license activation",
        "Mandatory training",
      ],
      compatibility: {
        accessories: ["Veterinary electrodes", "Standard cables"],
        previousVersions: ["4.3"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },
  "v4.3": {
    version: "4.3",
    device: "Hi-TENS",
    releaseDate: "15/12/2023",
    securityClass: "B",
    updateType: "evolutionary",
    changes: {
      features: [
        "Stable market version",
        "Standard Hi-TENS interface",
        "Optimized TENS protocols",
      ],
      security: ["Standard security controls", "TENS parameter validation"],
    },
    impacts: {
      security: "Stable reference version",
      performance: "Optimal TENS performance",
    },
    instructions: ["Hi-TENS reference version", "Standard use"],
    resolvedIssues: ["Stable version", "Optimized performance"],
    updateRisks: "No particular risks",
    residualRisks: "Nominal operation",
    installation: {
      steps: ["Standard installation", "Post-installation verification"],
      compatibility: {
        accessories: ["All Hi-TENS accessories"],
        previousVersions: ["4.2", "4.1"],
      },
    },
    support: {
      email: "hello@winback.com",
      phone: "+33 4 83 66 16 66",
      hours: "8am-6pm CET",
    },
  },
};
