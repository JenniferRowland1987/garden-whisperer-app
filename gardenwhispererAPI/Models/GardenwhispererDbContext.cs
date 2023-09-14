using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace gardenwhispererAPI.Models;

public partial class GardenwhispererDbContext : DbContext
{
    public GardenwhispererDbContext()
    {
    }

    public GardenwhispererDbContext(DbContextOptions<GardenwhispererDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Plant> Plants { get; set; }

    public virtual DbSet<UserInfo> UserInfos { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source=gardenwhisperer.database.windows.net;Initial Catalog=gardenwhispererDB; User Id=garden; Password=Whisperer123");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Plant>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Plants__3214EC07CA97CE10");

            entity.Property(e => e.CommonName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.DatePlanted).HasColumnType("date");
            entity.Property(e => e.LastFertilization).HasColumnType("date");
            entity.Property(e => e.LastWater).HasColumnType("date");
            entity.Property(e => e.NickName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Notes)
                .HasMaxLength(250)
                .IsUnicode(false);
            entity.Property(e => e.ScienificName)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Sun)
                .HasMaxLength(50)
                .IsUnicode(false);

            entity.HasOne(d => d.User).WithMany(p => p.Plants)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Plants__UserId__5EBF139D");
        });

        modelBuilder.Entity<UserInfo>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__UserInfo__3214EC07A5BE39FE");

            entity.ToTable("UserInfo");

            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Password).HasMaxLength(100);
            entity.Property(e => e.UserName)
                .HasMaxLength(100)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
