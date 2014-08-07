﻿using System;

namespace Hadouken.Core.Data.Models
{
    public sealed class User
    {
        public User()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }

        public string UserName { get; set; }

        public string HashedPassword { get; set; }
    }
}
