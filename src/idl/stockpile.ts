export type Stockpile = {
    version: "0.1.0";
    name: "stockpile";
    instructions: [
      {
        name: "createUser";
        accounts: [
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "authority";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "username";
            type: "string";
          },
          {
            name: "image";
            type: "string";
          }
        ];
      },
      {
        name: "createIndividual";
        accounts: [
          {
            name: "individual";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: true;
          },
          {
            name: "rent";
            isMut: false;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "description";
            type: "string";
          },
          {
            name: "imageLink";
            type: "string";
          },
          {
            name: "twitter";
            type: "string";
          },
          {
            name: "discord";
            type: "string";
          },
          {
            name: "telegram";
            type: "string";
          },
          {
            name: "location";
            type: "string";
          },
          {
            name: "goal";
            type: "string";
          }
        ];
      },
      {
        name: "createProject";
        accounts: [
          {
            name: "project";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "treasury";
            isMut: true;
            isSigner: true;
          },
          {
            name: "rent";
            isMut: false;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "description";
            type: "string";
          },
          {
            name: "imageLink";
            type: "string";
          },
          {
            name: "websiteLink";
            type: "string";
          },
          {
            name: "twitter";
            type: "string";
          },
          {
            name: "discord";
            type: "string";
          },
          {
            name: "telegram";
            type: "string";
          },
          {
            name: "location";
            type: "string";
          },
          {
            name: "repo";
            type: "string";
          },
          {
            name: "goal";
            type: "string";
          }
        ];
      },
      {
        name: "createGrant";
        accounts: [
          {
            name: "grant";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: true;
          },
          {
            name: "rent";
            isMut: false;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "description";
            type: "string";
          },
          {
            name: "imageLink";
            type: "string";
          },
          {
            name: "websiteLink";
            type: "string";
          },
          {
            name: "twitter";
            type: "string";
          },
          {
            name: "discord";
            type: "string";
          },
          {
            name: "telegram";
            type: "string";
          },
          {
            name: "location";
            type: "string";
          },
          {
            name: "repo";
            type: "string";
          },
          {
            name: "goal";
            type: "string";
          },
          {
            name: "isMatchingEligible";
            type: "bool";
          }
        ];
      },
      {
        name: "createCharity";
        accounts: [
          {
            name: "charity";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: true;
          },
          {
            name: "rent";
            isMut: false;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "name";
            type: "string";
          },
          {
            name: "description";
            type: "string";
          },
          {
            name: "imageLink";
            type: "string";
          },
          {
            name: "websiteLink";
            type: "string";
          },
          {
            name: "twitter";
            type: "string";
          },
          {
            name: "discord";
            type: "string";
          },
          {
            name: "telegram";
            type: "string";
          },
          {
            name: "location";
            type: "string";
          },
          {
            name: "filingLink";
            type: "string";
          },
          {
            name: "goal";
            type: "string";
          }
        ];
      },
      {
        name: "contributeCharity";
        accounts: [
          {
            name: "charity";
            isMut: true;
            isSigner: false;
          },
          {
            name: "contributor";
            isMut: true;
            isSigner: true;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "tokenProgram";
            isMut: false;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "amount";
            type: "u64";
          }
        ];
      },
      {
        name: "contributeGrant";
        accounts: [
          {
            name: "grant";
            isMut: true;
            isSigner: false;
          },
          {
            name: "contributor";
            isMut: true;
            isSigner: true;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "tokenProgram";
            isMut: false;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "amount";
            type: "u64";
          }
        ];
      },
      {
        name: "contributeIndividual";
        accounts: [
          {
            name: "individual";
            isMut: true;
            isSigner: false;
          },
          {
            name: "contributor";
            isMut: true;
            isSigner: true;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "tokenProgram";
            isMut: false;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "amount";
            type: "u64";
          }
        ];
      },
      {
        name: "contributeProject";
        accounts: [
          {
            name: "project";
            isMut: true;
            isSigner: false;
          },
          {
            name: "contributor";
            isMut: true;
            isSigner: true;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "tokenProgram";
            isMut: false;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "amount";
            type: "u64";
          }
        ];
      },
      {
        name: "updateCharity";
        accounts: [
          {
            name: "charity";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "description";
            type: "string";
          },
          {
            name: "websiteLink";
            type: "string";
          },
          {
            name: "twitter";
            type: "string";
          },
          {
            name: "discord";
            type: "string";
          },
          {
            name: "telegram";
            type: "string";
          },
          {
            name: "filing";
            type: "string";
          },
          {
            name: "image";
            type: "string";
          }
        ];
      },
      {
        name: "updateCharityGoal";
        accounts: [
          {
            name: "charity";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "goal";
            type: "u64";
          }
        ];
      },
      {
        name: "updateGrant";
        accounts: [
          {
            name: "grant";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "description";
            type: "string";
          },
          {
            name: "websiteLink";
            type: "string";
          },
          {
            name: "twitter";
            type: "string";
          },
          {
            name: "discord";
            type: "string";
          },
          {
            name: "telegram";
            type: "string";
          },
          {
            name: "repo";
            type: "string";
          },
          {
            name: "image";
            type: "string";
          }
        ];
      },
      {
        name: "updateGrantGoal";
        accounts: [
          {
            name: "grant";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "goal";
            type: "u64";
          }
        ];
      },
      {
        name: "updateIndividual";
        accounts: [
          {
            name: "individual";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "description";
            type: "string";
          },
          {
            name: "twitter";
            type: "string";
          },
          {
            name: "discord";
            type: "string";
          },
          {
            name: "telegram";
            type: "string";
          },
          {
            name: "image";
            type: "string";
          }
        ];
      },
      {
        name: "updateIndividualGoal";
        accounts: [
          {
            name: "individual";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "goal";
            type: "u64";
          }
        ];
      },
      {
        name: "updateProject";
        accounts: [
          {
            name: "project";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "treasury";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "description";
            type: "string";
          },
          {
            name: "websiteLink";
            type: "string";
          },
          {
            name: "twitter";
            type: "string";
          },
          {
            name: "discord";
            type: "string";
          },
          {
            name: "telegram";
            type: "string";
          },
          {
            name: "repo";
            type: "string";
          },
          {
            name: "image";
            type: "string";
          }
        ];
      },
      {
        name: "updateProjectGoal";
        accounts: [
          {
            name: "project";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "treasury";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "goal";
            type: "u64";
          }
        ];
      },
      {
        name: "updateUser";
        accounts: [
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "authority";
            isMut: true;
            isSigner: true;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "username";
            type: "string";
          },
          {
            name: "image";
            type: "string";
          }
        ];
      },
      {
        name: "withdrawCharity";
        accounts: [
          {
            name: "charity";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "amount";
            type: "u64";
          }
        ];
      },
      {
        name: "withdrawGrant";
        accounts: [
          {
            name: "grant";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "amount";
            type: "u64";
          }
        ];
      },
      {
        name: "withdrawIndividual";
        accounts: [
          {
            name: "individual";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "beneficiary";
            isMut: true;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "amount";
            type: "u64";
          }
        ];
      },
      {
        name: "withdrawProject";
        accounts: [
          {
            name: "project";
            isMut: true;
            isSigner: false;
          },
          {
            name: "userAccount";
            isMut: true;
            isSigner: false;
          },
          {
            name: "treasury";
            isMut: true;
            isSigner: false;
          },
          {
            name: "systemProgram";
            isMut: false;
            isSigner: false;
          }
        ];
        args: [
          {
            name: "amount";
            type: "u64";
          }
        ];
      }
    ];
    accounts: [
      {
        name: "Charity";
        type: {
          kind: "struct";
          fields: [
            {
              name: "beneficiary";
              type: "publicKey";
            },
            {
              name: "creator";
              type: "string";
            },
            {
              name: "name";
              type: "string";
            },
            {
              name: "description";
              type: "string";
            },
            {
              name: "imageLink";
              type: "string";
            },
            {
              name: "twitter";
              type: "string";
            },
            {
              name: "discord";
              type: "string";
            },
            {
              name: "telegram";
              type: "string";
            },
            {
              name: "location";
              type: "string";
            },
            {
              name: "websiteLink";
              type: "string";
            },
            {
              name: "filingLink";
              type: "string";
            },
            {
              name: "raised";
              type: "u64";
            },
            {
              name: "goal";
              type: "string";
            },
            {
              name: "contributions";
              type: "u8";
            },
            {
              name: "bump";
              type: "u8";
            },
            {
              name: "time";
              type: "i64";
            },
            {
              name: "category";
              type: "string";
            },
            {
              name: "balance";
              type: "u64";
            },
            {
              name: "lastUpdated";
              type: "i64";
            }
          ];
        };
      },
      {
        name: "Grant";
        type: {
          kind: "struct";
          fields: [
            {
              name: "beneficiary";
              type: "publicKey";
            },
            {
              name: "creator";
              type: "string";
            },
            {
              name: "name";
              type: "string";
            },
            {
              name: "description";
              type: "string";
            },
            {
              name: "imageLink";
              type: "string";
            },
            {
              name: "websiteLink";
              type: "string";
            },
            {
              name: "twitter";
              type: "string";
            },
            {
              name: "discord";
              type: "string";
            },
            {
              name: "telegram";
              type: "string";
            },
            {
              name: "location";
              type: "string";
            },
            {
              name: "repo";
              type: "string";
            },
            {
              name: "goal";
              type: "string";
            },
            {
              name: "raised";
              type: "u64";
            },
            {
              name: "contributions";
              type: "u8";
            },
            {
              name: "isMatchingEligible";
              type: "bool";
            },
            {
              name: "bump";
              type: "u8";
            },
            {
              name: "time";
              type: "i64";
            },
            {
              name: "category";
              type: "string";
            },
            {
              name: "balance";
              type: "u64";
            },
            {
              name: "lastUpdated";
              type: "i64";
            }
          ];
        };
      },
      {
        name: "Individual";
        type: {
          kind: "struct";
          fields: [
            {
              name: "beneficiary";
              type: "publicKey";
            },
            {
              name: "creator";
              type: "string";
            },
            {
              name: "name";
              type: "string";
            },
            {
              name: "description";
              type: "string";
            },
            {
              name: "imageLink";
              type: "string";
            },
            {
              name: "twitter";
              type: "string";
            },
            {
              name: "discord";
              type: "string";
            },
            {
              name: "telegram";
              type: "string";
            },
            {
              name: "location";
              type: "string";
            },
            {
              name: "raised";
              type: "u64";
            },
            {
              name: "goal";
              type: "string";
            },
            {
              name: "contributions";
              type: "u8";
            },
            {
              name: "bump";
              type: "u8";
            },
            {
              name: "time";
              type: "i64";
            },
            {
              name: "category";
              type: "string";
            },
            {
              name: "balance";
              type: "u64";
            },
            {
              name: "lastUpdated";
              type: "i64";
            }
          ];
        };
      },
      {
        name: "Project";
        type: {
          kind: "struct";
          fields: [
            {
              name: "treasury";
              type: "publicKey";
            },
            {
              name: "creator";
              type: "string";
            },
            {
              name: "name";
              type: "string";
            },
            {
              name: "description";
              type: "string";
            },
            {
              name: "imageLink";
              type: "string";
            },
            {
              name: "websiteLink";
              type: "string";
            },
            {
              name: "twitter";
              type: "string";
            },
            {
              name: "discord";
              type: "string";
            },
            {
              name: "telegram";
              type: "string";
            },
            {
              name: "location";
              type: "string";
            },
            {
              name: "raised";
              type: "u64";
            },
            {
              name: "repo";
              type: "string";
            },
            {
              name: "goal";
              type: "string";
            },
            {
              name: "contributions";
              type: "u8";
            },
            {
              name: "bump";
              type: "u8";
            },
            {
              name: "time";
              type: "i64";
            },
            {
              name: "category";
              type: "string";
            },
            {
              name: "balance";
              type: "u64";
            },
            {
              name: "lastUpdated";
              type: "i64";
            }
          ];
        };
      },
      {
        name: "User";
        type: {
          kind: "struct";
          fields: [
            {
              name: "authority";
              type: "publicKey";
            },
            {
              name: "username";
              type: "string";
            },
            {
              name: "fundraisers";
              type: "u8";
            },
            {
              name: "contributions";
              type: "u8";
            },
            {
              name: "bump";
              type: "u8";
            },
            {
              name: "time";
              type: "i64";
            },
            {
              name: "image";
              type: "string";
            }
          ];
        };
      }
    ];
    errors: [
      {
        code: 6000;
        name: "NameTooLong";
        msg: "Fundraiser name is too long";
      },
      {
        code: 6001;
        name: "DescriptionTooLong";
        msg: "Fundraiser description is too long";
      },
      {
        code: 6002;
        name: "InvalidAuthority";
        msg: "Invalid Authority to Update";
      },
      {
        code: 6003;
        name: "AmountTooLarge";
        msg: "Attempting to withdraw more than Fundraiser's balance";
      },
      {
        code: 6004;
        name: "GoalNotMet";
        msg: "Fundraiser's goal has not been met";
      },
      {
        code: 6005;
        name: "InvalidBeneficiary";
        msg: "Invalid Beneficiary provided";
      }
    ];
    metadata: {
      address: "7XajpmvbZwBkGg9Rrz9fb8iHdy1uWhiSVwVsdrGUSk7P";
    };
  };
  export const IDL: Stockpile = {
    version: "0.1.0",
    name: "stockpile",
    instructions: [
      {
        name: "createUser",
        accounts: [
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "username",
            type: "string",
          },
          {
            name: "image",
            type: "string",
          },
        ],
      },
      {
        name: "createIndividual",
        accounts: [
          {
            name: "individual",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: true,
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "imageLink",
            type: "string",
          },
          {
            name: "twitter",
            type: "string",
          },
          {
            name: "discord",
            type: "string",
          },
          {
            name: "telegram",
            type: "string",
          },
          {
            name: "location",
            type: "string",
          },
          {
            name: "goal",
            type: "string",
          },
        ],
      },
      {
        name: "createProject",
        accounts: [
          {
            name: "project",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "treasury",
            isMut: true,
            isSigner: true,
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "imageLink",
            type: "string",
          },
          {
            name: "websiteLink",
            type: "string",
          },
          {
            name: "twitter",
            type: "string",
          },
          {
            name: "discord",
            type: "string",
          },
          {
            name: "telegram",
            type: "string",
          },
          {
            name: "location",
            type: "string",
          },
          {
            name: "repo",
            type: "string",
          },
          {
            name: "goal",
            type: "string",
          },
        ],
      },
      {
        name: "createGrant",
        accounts: [
          {
            name: "grant",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: true,
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "imageLink",
            type: "string",
          },
          {
            name: "websiteLink",
            type: "string",
          },
          {
            name: "twitter",
            type: "string",
          },
          {
            name: "discord",
            type: "string",
          },
          {
            name: "telegram",
            type: "string",
          },
          {
            name: "location",
            type: "string",
          },
          {
            name: "repo",
            type: "string",
          },
          {
            name: "goal",
            type: "string",
          },
          {
            name: "isMatchingEligible",
            type: "bool",
          },
        ],
      },
      {
        name: "createCharity",
        accounts: [
          {
            name: "charity",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: true,
          },
          {
            name: "rent",
            isMut: false,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "name",
            type: "string",
          },
          {
            name: "description",
            type: "string",
          },
          {
            name: "imageLink",
            type: "string",
          },
          {
            name: "websiteLink",
            type: "string",
          },
          {
            name: "twitter",
            type: "string",
          },
          {
            name: "discord",
            type: "string",
          },
          {
            name: "telegram",
            type: "string",
          },
          {
            name: "location",
            type: "string",
          },
          {
            name: "filingLink",
            type: "string",
          },
          {
            name: "goal",
            type: "string",
          },
        ],
      },
      {
        name: "contributeCharity",
        accounts: [
          {
            name: "charity",
            isMut: true,
            isSigner: false,
          },
          {
            name: "contributor",
            isMut: true,
            isSigner: true,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
      {
        name: "contributeGrant",
        accounts: [
          {
            name: "grant",
            isMut: true,
            isSigner: false,
          },
          {
            name: "contributor",
            isMut: true,
            isSigner: true,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
      {
        name: "contributeIndividual",
        accounts: [
          {
            name: "individual",
            isMut: true,
            isSigner: false,
          },
          {
            name: "contributor",
            isMut: true,
            isSigner: true,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
      {
        name: "contributeProject",
        accounts: [
          {
            name: "project",
            isMut: true,
            isSigner: false,
          },
          {
            name: "contributor",
            isMut: true,
            isSigner: true,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "tokenProgram",
            isMut: false,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
      {
        name: "updateCharity",
        accounts: [
          {
            name: "charity",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "description",
            type: "string",
          },
          {
            name: "websiteLink",
            type: "string",
          },
          {
            name: "twitter",
            type: "string",
          },
          {
            name: "discord",
            type: "string",
          },
          {
            name: "telegram",
            type: "string",
          },
          {
            name: "filing",
            type: "string",
          },
          {
            name: "image",
            type: "string",
          },
        ],
      },
      {
        name: "updateCharityGoal",
        accounts: [
          {
            name: "charity",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "goal",
            type: "u64",
          },
        ],
      },
      {
        name: "updateGrant",
        accounts: [
          {
            name: "grant",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "description",
            type: "string",
          },
          {
            name: "websiteLink",
            type: "string",
          },
          {
            name: "twitter",
            type: "string",
          },
          {
            name: "discord",
            type: "string",
          },
          {
            name: "telegram",
            type: "string",
          },
          {
            name: "repo",
            type: "string",
          },
          {
            name: "image",
            type: "string",
          },
        ],
      },
      {
        name: "updateGrantGoal",
        accounts: [
          {
            name: "grant",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "goal",
            type: "u64",
          },
        ],
      },
      {
        name: "updateIndividual",
        accounts: [
          {
            name: "individual",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "description",
            type: "string",
          },
          {
            name: "twitter",
            type: "string",
          },
          {
            name: "discord",
            type: "string",
          },
          {
            name: "telegram",
            type: "string",
          },
          {
            name: "image",
            type: "string",
          },
        ],
      },
      {
        name: "updateIndividualGoal",
        accounts: [
          {
            name: "individual",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "goal",
            type: "u64",
          },
        ],
      },
      {
        name: "updateProject",
        accounts: [
          {
            name: "project",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "treasury",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "description",
            type: "string",
          },
          {
            name: "websiteLink",
            type: "string",
          },
          {
            name: "twitter",
            type: "string",
          },
          {
            name: "discord",
            type: "string",
          },
          {
            name: "telegram",
            type: "string",
          },
          {
            name: "repo",
            type: "string",
          },
          {
            name: "image",
            type: "string",
          },
        ],
      },
      {
        name: "updateProjectGoal",
        accounts: [
          {
            name: "project",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "treasury",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "goal",
            type: "u64",
          },
        ],
      },
      {
        name: "updateUser",
        accounts: [
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "authority",
            isMut: true,
            isSigner: true,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "username",
            type: "string",
          },
          {
            name: "image",
            type: "string",
          },
        ],
      },
      {
        name: "withdrawCharity",
        accounts: [
          {
            name: "charity",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
      {
        name: "withdrawGrant",
        accounts: [
          {
            name: "grant",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
      {
        name: "withdrawIndividual",
        accounts: [
          {
            name: "individual",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "beneficiary",
            isMut: true,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
      {
        name: "withdrawProject",
        accounts: [
          {
            name: "project",
            isMut: true,
            isSigner: false,
          },
          {
            name: "userAccount",
            isMut: true,
            isSigner: false,
          },
          {
            name: "treasury",
            isMut: true,
            isSigner: false,
          },
          {
            name: "systemProgram",
            isMut: false,
            isSigner: false,
          },
        ],
        args: [
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    ],
    accounts: [
      {
        name: "Charity",
        type: {
          kind: "struct",
          fields: [
            {
              name: "beneficiary",
              type: "publicKey",
            },
            {
              name: "creator",
              type: "string",
            },
            {
              name: "name",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
            {
              name: "imageLink",
              type: "string",
            },
            {
              name: "twitter",
              type: "string",
            },
            {
              name: "discord",
              type: "string",
            },
            {
              name: "telegram",
              type: "string",
            },
            {
              name: "location",
              type: "string",
            },
            {
              name: "websiteLink",
              type: "string",
            },
            {
              name: "filingLink",
              type: "string",
            },
            {
              name: "raised",
              type: "u64",
            },
            {
              name: "goal",
              type: "string",
            },
            {
              name: "contributions",
              type: "u8",
            },
            {
              name: "bump",
              type: "u8",
            },
            {
              name: "time",
              type: "i64",
            },
            {
              name: "category",
              type: "string",
            },
            {
              name: "balance",
              type: "u64",
            },
            {
              name: "lastUpdated",
              type: "i64",
            },
          ],
        },
      },
      {
        name: "Grant",
        type: {
          kind: "struct",
          fields: [
            {
              name: "beneficiary",
              type: "publicKey",
            },
            {
              name: "creator",
              type: "string",
            },
            {
              name: "name",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
            {
              name: "imageLink",
              type: "string",
            },
            {
              name: "websiteLink",
              type: "string",
            },
            {
              name: "twitter",
              type: "string",
            },
            {
              name: "discord",
              type: "string",
            },
            {
              name: "telegram",
              type: "string",
            },
            {
              name: "location",
              type: "string",
            },
            {
              name: "repo",
              type: "string",
            },
            {
              name: "goal",
              type: "string",
            },
            {
              name: "raised",
              type: "u64",
            },
            {
              name: "contributions",
              type: "u8",
            },
            {
              name: "isMatchingEligible",
              type: "bool",
            },
            {
              name: "bump",
              type: "u8",
            },
            {
              name: "time",
              type: "i64",
            },
            {
              name: "category",
              type: "string",
            },
            {
              name: "balance",
              type: "u64",
            },
            {
              name: "lastUpdated",
              type: "i64",
            },
          ],
        },
      },
      {
        name: "Individual",
        type: {
          kind: "struct",
          fields: [
            {
              name: "beneficiary",
              type: "publicKey",
            },
            {
              name: "creator",
              type: "string",
            },
            {
              name: "name",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
            {
              name: "imageLink",
              type: "string",
            },
            {
              name: "twitter",
              type: "string",
            },
            {
              name: "discord",
              type: "string",
            },
            {
              name: "telegram",
              type: "string",
            },
            {
              name: "location",
              type: "string",
            },
            {
              name: "raised",
              type: "u64",
            },
            {
              name: "goal",
              type: "string",
            },
            {
              name: "contributions",
              type: "u8",
            },
            {
              name: "bump",
              type: "u8",
            },
            {
              name: "time",
              type: "i64",
            },
            {
              name: "category",
              type: "string",
            },
            {
              name: "balance",
              type: "u64",
            },
            {
              name: "lastUpdated",
              type: "i64",
            },
          ],
        },
      },
      {
        name: "Project",
        type: {
          kind: "struct",
          fields: [
            {
              name: "treasury",
              type: "publicKey",
            },
            {
              name: "creator",
              type: "string",
            },
            {
              name: "name",
              type: "string",
            },
            {
              name: "description",
              type: "string",
            },
            {
              name: "imageLink",
              type: "string",
            },
            {
              name: "websiteLink",
              type: "string",
            },
            {
              name: "twitter",
              type: "string",
            },
            {
              name: "discord",
              type: "string",
            },
            {
              name: "telegram",
              type: "string",
            },
            {
              name: "location",
              type: "string",
            },
            {
              name: "raised",
              type: "u64",
            },
            {
              name: "repo",
              type: "string",
            },
            {
              name: "goal",
              type: "string",
            },
            {
              name: "contributions",
              type: "u8",
            },
            {
              name: "bump",
              type: "u8",
            },
            {
              name: "time",
              type: "i64",
            },
            {
              name: "category",
              type: "string",
            },
            {
              name: "balance",
              type: "u64",
            },
            {
              name: "lastUpdated",
              type: "i64",
            },
          ],
        },
      },
      {
        name: "User",
        type: {
          kind: "struct",
          fields: [
            {
              name: "authority",
              type: "publicKey",
            },
            {
              name: "username",
              type: "string",
            },
            {
              name: "fundraisers",
              type: "u8",
            },
            {
              name: "contributions",
              type: "u8",
            },
            {
              name: "bump",
              type: "u8",
            },
            {
              name: "time",
              type: "i64",
            },
            {
              name: "image",
              type: "string",
            },
          ],
        },
      },
    ],
    errors: [
      {
        code: 6000,
        name: "NameTooLong",
        msg: "Fundraiser name is too long",
      },
      {
        code: 6001,
        name: "DescriptionTooLong",
        msg: "Fundraiser description is too long",
      },
      {
        code: 6002,
        name: "InvalidAuthority",
        msg: "Invalid Authority to Update",
      },
      {
        code: 6003,
        name: "AmountTooLarge",
        msg: "Attempting to withdraw more than Fundraiser's balance",
      },
      {
        code: 6004,
        name: "GoalNotMet",
        msg: "Fundraiser's goal has not been met",
      },
      {
        code: 6005,
        name: "InvalidBeneficiary",
        msg: "Invalid Beneficiary provided",
      },
    ],
    metadata: {
      address: "7XajpmvbZwBkGg9Rrz9fb8iHdy1uWhiSVwVsdrGUSk7P",
    },
  };